export const name="pencil-simple-line-light";
export const id="dl_386d51b085c0409c8a0f";
export const url=new URL("../icons/pencil-simple-line-light.svg?v=d0a07f41e2c63dca8c07c85e8d43fb370cd70aef5700df3bbfadccfdb43f0052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
