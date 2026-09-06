export const name="arrow-elbow-left-up";
export const id="dl_878c0241197044d5b900";
export const url=new URL("../icons/arrow-elbow-left-up.svg?v=89258c5e151e91d5349ee99bc9d866dd4f38ac45227b3974922d4b65927c61ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
