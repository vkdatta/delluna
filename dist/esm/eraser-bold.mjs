export const name="eraser-bold";
export const id="dl_77d2ddb5469741d89de3";
export const url=new URL("../icons/eraser-bold.svg?v=420ef0d33d0045b528640ab1a4bbc85d15a2c5ca6adf9770981b0b21f81fd5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
