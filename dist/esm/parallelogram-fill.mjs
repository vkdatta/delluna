export const name="parallelogram-fill";
export const id="dl_d6ef682459cf406fae46";
export const url=new URL("../icons/parallelogram-fill.svg?v=f6de6dcb5637e40a4e659ec912083d95816be6f4779e800bf56cbbeceafa8994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
