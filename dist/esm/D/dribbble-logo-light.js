export const name="dribbble-logo-light";
export const id="dl_46a50d6f4e724ed8a2ae";
export const url=new URL("../../icons/D/dribbble-logo-light.svg?v=bcfba56f7c8ae256466ec67cd8a8e671c6f607aee2753558939dd19e65002107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
