export const name="asterisk-simple";
export const id="dl_7a94d1397ea148188587";
export const url=new URL("../icons/asterisk-simple.svg?v=f39801c50170f6050d6cd374279053df8d615ecd22be6020d641c4e659513861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
