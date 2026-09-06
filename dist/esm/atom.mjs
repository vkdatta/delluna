export const name="atom";
export const id="dl_0328e9ddfe7440f4adf5";
export const url=new URL("../icons/atom.svg?v=fcaf798c130924dd93a3de5c66ee492143ba2a2c72cd3f606a3087c597d59961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
