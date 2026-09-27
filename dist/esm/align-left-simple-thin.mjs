export const name="align-left-simple-thin";
export const id="dl_d0988c60207a41c8806b";
export const url=new URL("../icons/align-left-simple-thin.svg?v=9c9f61c5e22178304d973db266b6bf474528c0732de6dae7bdcf14ea4a6dbd56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
