export const name="moon-stars-duotone";
export const id="dl_163252f004104763ab82";
export const url=new URL("../icons/moon-stars-duotone.svg?v=6210f7142dd0a4572dc61cf43ab3a48b5d8279cbee133cd6bdda2bae2137a573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
