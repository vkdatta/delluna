export const name="slide_library";
export const id="dl_2d623b6ff0a400c92230";
export const url=new URL("../icons/slide_library.svg?v=282f99b2e4503dcd9e1e043729ebb2b5b3007a869cd6a79afb52b919eef33b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
