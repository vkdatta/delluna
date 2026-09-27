export const name="arrows-in";
export const id="dl_69e781b3acee4dce9606";
export const url=new URL("../icons/arrows-in.svg?v=68972eea953e373727343bd1244dce2199b135fd1a71d43884082b9971f0eaf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
