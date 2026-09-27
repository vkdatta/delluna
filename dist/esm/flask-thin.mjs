export const name="flask-thin";
export const id="dl_b426004e9b164c75aead";
export const url=new URL("../icons/flask-thin.svg?v=dae7572543bcf85bbc26c1c40bded06537855c097edc490c9959dc61a68cff63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
