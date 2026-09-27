export const name="option-fill";
export const id="dl_8ef5a83e9e4e46c89b38";
export const url=new URL("../icons/option-fill.svg?v=5b8cfa170ee24779572c22131d4ac5d49f49290d49e001ef1ae99eb4147c99e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
