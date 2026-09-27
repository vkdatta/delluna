export const name="gitlab-logo-simple";
export const id="dl_69375c8b23444ff6b785";
export const url=new URL("../icons/gitlab-logo-simple.svg?v=17d3a5e5003fd689b16ab7bc707ed1424d7d17a77cfe7a20aadeea3b81f03857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
