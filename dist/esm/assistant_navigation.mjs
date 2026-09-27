export const name="assistant_navigation";
export const id="dl_7f183cfe208ea870d22c";
export const url=new URL("../icons/assistant_navigation.svg?v=994197bd99f720f8558f1fcbbd8b7f487474460d58c5baa22ec9a82d54d6758b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
