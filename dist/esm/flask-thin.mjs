export const name="flask-thin";
export const id="dl_b426004e9b164c75aead";
export const url=new URL("../icons/flask-thin.svg?v=99ae5ce1b7a08b531a04e1ee561faa7450e3b559db9bccffb216a50ce83c0710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
