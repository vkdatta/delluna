export const name="bulldozer-thin";
export const id="dl_866b0d7eb1f24882aa08";
export const url=new URL("../icons/bulldozer-thin.svg?v=ede73918a47a92d0bf0a53cecfecb11da53a632afdf96d272a4ac3427a700c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
