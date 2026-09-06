export const name="disco-ball-thin";
export const id="dl_bf259018425241659f7b";
export const url=new URL("../icons/disco-ball-thin.svg?v=3d56e01d614a10672e7342b525679e96d83659c889ce1dbb9e2b0d7b50a8991f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
