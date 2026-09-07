export const name="shipping-container-light";
export const id="dl_fc4efc9270d44fc9bd1f";
export const url=new URL("../icons/S/shipping-container-light.svg?v=03b03949437e73fdcf9a61b5b62d7e08e88880d09734b0f5f272a9ed32545dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
