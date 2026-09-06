export const name="desktop-bold";
export const id="dl_83ce61ffb6c344e59cd8";
export const url=new URL("../icons/desktop-bold.svg?v=920fdc531ff74e446edaa0d189adf9a4c828de48c42e52de258a0dc4692f9473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
