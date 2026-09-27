export const name="headphones";
export const id="dl_0db5ffdf11e840efa470";
export const url=new URL("../icons/headphones.svg?v=bb013aba6d897efd8e33e00b229eb09bc0fcae55fbe04a242e6727db1bbc2586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
