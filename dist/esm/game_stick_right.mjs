export const name="game_stick_right";
export const id="dl_86e63a7fba2699696ddf";
export const url=new URL("../icons/game_stick_right.svg?v=b49ea570b7434979962e0b275f34316b66c1ea1eb8643bfc83150382ae614be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
