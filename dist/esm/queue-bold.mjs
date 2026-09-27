export const name="queue-bold";
export const id="dl_c886e19801a447c5bc7b";
export const url=new URL("../icons/queue-bold.svg?v=4dc73f190264773acf059070069949ab70c4ea31521f277fab4918ec1cf9e256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
