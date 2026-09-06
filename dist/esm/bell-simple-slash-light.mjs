export const name="bell-simple-slash-light";
export const id="dl_013abc0106144d6193bf";
export const url=new URL("../icons/bell-simple-slash-light.svg?v=96acf9de392901543e6409e96b8e9c908bb58a2a0312b50ad7d315d86835db48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
