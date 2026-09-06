export const name="arrow-line-up-thin";
export const id="dl_71891de9955142c893b2";
export const url=new URL("../icons/arrow-line-up-thin.svg?v=40ca7e1be4b81159a6bae268b4a76f97eabe331e61ec200b448dbc0bd3729c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
