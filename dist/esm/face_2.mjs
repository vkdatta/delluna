export const name="face_2";
export const id="dl_86bba4b17fe54a3386ca";
export const url=new URL("../icons/face_2.svg?v=94c529bd5d844173161c519fa952c1d51c47b4ef871c38bcb38bb8f44d3864eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
