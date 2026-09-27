export const name="avocado-bold";
export const id="dl_288fb05a8b654eacad69";
export const url=new URL("../icons/avocado-bold.svg?v=36cfbd11a28a748a3f191eafabe081ad7a92e9252d6afd3e0245392defe68c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
