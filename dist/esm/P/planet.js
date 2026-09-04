export const name="planet";
export const id="dl_c83ecb6c38bd4424ab64";
export const url=new URL("../../icons/P/planet.svg?v=6debb1f42963ba6e1095d993253d2a558c2badb03cadc654e16f2e98dcaefb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
