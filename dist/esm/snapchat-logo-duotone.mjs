export const name="snapchat-logo-duotone";
export const id="dl_23808ebd9f6e47079588";
export const url=new URL("../icons/S/snapchat-logo-duotone.svg?v=d1315a155f2553b29fb7932e8be7578b8dfc5ba1edbc03d7573a442af4235d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
