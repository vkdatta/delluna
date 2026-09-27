export const name="phosphor-logo-bold";
export const id="dl_1ef7d55b9c6349e3b4ef";
export const url=new URL("../icons/phosphor-logo-bold.svg?v=ba158079b23dee2532ef9bf87fd587f43ef0558950e46fa1bdaa459f11982fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
