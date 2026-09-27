export const name="flask-thin";
export const id="dl_b426004e9b164c75aead";
export const url=new URL("../icons/flask-thin.svg?v=1fad56364977a48f3765441785df02d1aa8ef657f2e03f12b4f31236a2658378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
