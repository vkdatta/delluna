export const name="square-split-vertical-thin";
export const id="dl_b5a25c0dc42585c38860";
export const url=new URL("../icons/square-split-vertical-thin.svg?v=bdacde79ffe9cc0bdcf0dea04ece9fb0d968bb3d6a1fd0eb4eb611f14d87af84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
