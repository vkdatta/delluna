export const name="number-circle-four-light";
export const id="dl_d80d9274389f410daa6b";
export const url=new URL("../icons/number-circle-four-light.svg?v=41d2b7f22673126994cd4bb8164d83ef0a1f2c22b2b6cc8a02ab8b0bba520162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
