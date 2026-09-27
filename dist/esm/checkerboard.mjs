export const name="checkerboard";
export const id="dl_dd1b31668f4e438ab74e";
export const url=new URL("../icons/checkerboard.svg?v=579f10132bfc4fc7e5ce29f42528263c1aa5a54c3387eee70fde2dff89c27ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
