export const name="game_button_r1";
export const id="dl_711635ff0a9ce8d770f2";
export const url=new URL("../icons/game_button_r1.svg?v=6d78bd3f5da237714198f0707875ccac03fd0bd3d956472117921b3cbb22c76a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
