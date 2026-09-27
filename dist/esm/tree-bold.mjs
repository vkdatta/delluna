export const name="tree-bold";
export const id="dl_e9db8338f47e22daf509";
export const url=new URL("../icons/tree-bold.svg?v=2caab0ec3f63dc6fdc3a00ec7d165f42ebe341f37bb7f9259c4af3b14673182c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
