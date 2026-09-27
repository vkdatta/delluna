export const name="hand-waving-bold";
export const id="dl_679564edfabd42b69c6d";
export const url=new URL("../icons/hand-waving-bold.svg?v=76e8feeedcb45055e6f13e09d41f070555870ab20c416941268d03ebd7fba940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
