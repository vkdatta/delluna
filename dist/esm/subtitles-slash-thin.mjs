export const name="subtitles-slash-thin";
export const id="dl_0473d853934b22f9affd";
export const url=new URL("../icons/subtitles-slash-thin.svg?v=784bf6514e0ec1ead8f545dfb523e139663ef7b6575ce890dd053166f03c73d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
