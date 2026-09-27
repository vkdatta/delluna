export const name="arrow-elbow-down-right-bold";
export const id="dl_4a2235ef9c594465a38f";
export const url=new URL("../icons/arrow-elbow-down-right-bold.svg?v=42b68a997664c0fed6d5b3a2240214561f3ebdf0f4aa805c2b38050f062a3722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
