export const name="keep";
export const id="dl_d6cb07117a4448849fe0";
export const url=new URL("../icons/keep.svg?v=09add14029b27e20fc2916df26a1dbc21d33f54f7fba3e5dcc34a454cc22d8ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
