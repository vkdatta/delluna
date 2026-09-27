export const name="backspace";
export const id="dl_d71c9730fd21bfb0587d";
export const url=new URL("../icons/backspace.svg?v=dc018c2a1acbfec4fb15e0bd323bee259ecca8426a495861c62a109b6bd527fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
