export const name="square-half-light";
export const id="dl_6abeaf17a09965c1793c";
export const url=new URL("../icons/square-half-light.svg?v=358d7501a2c938de4e1f5d5d2fa217cef688879170cf9c94d914623d3cbeeb3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
