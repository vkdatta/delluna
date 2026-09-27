export const name="football-thin";
export const id="dl_78baa5a5ec5149c7bab5";
export const url=new URL("../icons/football-thin.svg?v=d4f5ff398abf9664211788be81a1a4678e1ec58fa29b71486dd0c9240e3f1ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
