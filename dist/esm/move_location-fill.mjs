export const name="move_location-fill";
export const id="dl_9c26108c5b0b9bd84bc7";
export const url=new URL("../icons/move_location-fill.svg?v=78bb35b1cd25870491f329ee9b0a9de0db23a783f468fbb6995e21d03d16e8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
