export const name="puzzle-piece-fill";
export const id="dl_112c8fdc0a224f40bdd0";
export const url=new URL("../icons/puzzle-piece-fill.svg?v=1067dab98fff3cdaf27b39f0ebf6e0caa9de0500e72b1655ba932d3e17f06e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
