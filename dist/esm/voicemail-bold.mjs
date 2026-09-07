export const name="voicemail-bold";
export const id="dl_5b0f0a137b2f4eb2b5dc";
export const url=new URL("../icons/V/voicemail-bold.svg?v=d5915fd4fd2e9bb73f21b81b89ebc30fb7a4bf70525160459992d75c8e26615d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
