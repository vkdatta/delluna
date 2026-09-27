export const name="game-controller";
export const id="dl_68996279190c443b8060";
export const url=new URL("../icons/game-controller.svg?v=c6b36a94b7c0181005ee17abc6ea3f24619967dea5b80122beec612138bb1f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
