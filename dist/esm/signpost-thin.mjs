export const name="signpost-thin";
export const id="dl_05635baa11bf4a7fb7a5";
export const url=new URL("../icons/S/signpost-thin.svg?v=7b26847c521e030b172e18212d07405b3211a5da8f53869935b49604284f76e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
