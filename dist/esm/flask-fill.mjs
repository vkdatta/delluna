export const name="flask-fill";
export const id="dl_cd82cd040dcf4a109bd5";
export const url=new URL("../icons/flask-fill.svg?v=83ff8134febb17c6190bc46e3516d8c5fa7940d8b20f627ca3e45581ca29fece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
