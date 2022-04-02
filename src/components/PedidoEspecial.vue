<template>
  <section id="formSection" class="sectionsStyles">
    
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>¿Necesitas un pedido especial? </h2>
          <h3>Cuentanos que necesitas</h3>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form class="row g-3">
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">Nombre completo</label>
              <input type="text" class="form-control" id="validationDefault01" placeholder="Juan Eduardo Perez Sarmiento" required>
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">Telefono</label>
              <input type="number" maxlength="10" class="form-control" id="validationDefault02" placeholder="9871234567" required>
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">E - Mail</label>
              <div class="input-group">                
                <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
              </div>
            </div>            
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">Seleccione un sabor:</label>
              <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">Sabor...</option>
                <option>Chocolate</option>
                <option>Vainilla</option>
                <option>3 leches</option>
                <option>Limon</option>
                <option>Manzana</option>
                <option>Chesse cake</option>
                <option>Calabaza</option>
                <option>Camote</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="validationDefault05" class="form-label">Seleccione una cubierta</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  Chantilly
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                  Merengue
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">Cuentanos como quieres tu pastel:</label>
              <textarea type="text" class="form-control" id="validationDefault03" rows="5" cols="8" required></textarea>
            </div>
            <div class="col-12">
              <label><h4>Selecciona tu decoracion(Opcional)</h4></label>
              <hr>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck1" required>
                <label class="form-check-label" for="invalidCheck1">
                  Chispas de chocolate
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                <label class="form-check-label" for="invalidCheck2">
                  Rayadura de galleta de chocolate
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck3" required>
                <label class="form-check-label" for="invalidCheck3">
                  Lunetas
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck4" required>
                <label class="form-check-label" for="invalidCheck4">
                  Detalles de fondant
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck5" required>
                <label class="form-check-label" for="invalidCheck5">
                  Rayadura de coco
                </label>
              </div>
            </div>
            <div class="col-12">
              <br>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PedidoEspecial"
}
</script>