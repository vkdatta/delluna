export const name="user-rectangle";
export const id="dl_83af79550865b9f18986";
export const url=new URL("../icons/user-rectangle.svg?v=12687afcd1fdee186b4a9f625c73d78d8336abf3c024a52d8e5ce13522fe7636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
