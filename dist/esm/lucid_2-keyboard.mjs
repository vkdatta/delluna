export const name="lucid_2-keyboard";
export const id="dl_4a4382f07352449699e5";
export const url=new URL("../icons/lucid_2-keyboard.svg?v=68aea116d4e67437b9b3b116a569726cfcd100188f3d0a489a3a9ea44dfa2a12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
