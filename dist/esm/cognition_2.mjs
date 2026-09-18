export const name="cognition_2";
export const id="dl_4ff0027a7ffa40d28c42";
export const url=new URL("../icons/cognition_2.svg?v=21b11a2d18e520884044d1db850e8951d78fbf1d8406b31465aab8726c038cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
