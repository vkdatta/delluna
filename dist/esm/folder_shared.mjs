export const name="folder_shared";
export const id="dl_d356800caf6b57f8c755";
export const url=new URL("../icons/folder_shared.svg?v=5e0b2bf7142f169113740c35787d736c8a64a82ba3eff7e6944df8a7d183abce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
