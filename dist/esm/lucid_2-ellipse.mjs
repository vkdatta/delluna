export const name="lucid_2-ellipse";
export const id="dl_2feadfea66b941a6a9eb";
export const url=new URL("../icons/lucid_2-ellipse.svg?v=b00e8f2ba87471aadac652f434e2f8c2a886ecbf45983312300f2c68b21fb556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
