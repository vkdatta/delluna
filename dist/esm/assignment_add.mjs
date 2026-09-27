export const name="assignment_add";
export const id="dl_0091137bf3e058f3d17d";
export const url=new URL("../icons/assignment_add.svg?v=2fe9392d9a6c404b9e34b08c8005c396766cc62e39ca9dc2aa86fa762f3b95a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
